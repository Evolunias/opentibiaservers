import CustomSabrehavenOtServerKeywordPage, { generateMetadata } from './custom-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenOtServerKeywordPage />;
}
