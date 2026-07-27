import CustomAlasteraOtServerKeywordPage, { generateMetadata } from './custom-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraOtServerKeywordPage />;
}
