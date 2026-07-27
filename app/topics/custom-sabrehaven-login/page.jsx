import CustomSabrehavenLoginKeywordPage, { generateMetadata } from './custom-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenLoginKeywordPage />;
}
