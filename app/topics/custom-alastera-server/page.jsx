import CustomAlasteraServerKeywordPage, { generateMetadata } from './custom-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraServerKeywordPage />;
}
