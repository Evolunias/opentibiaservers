import CustomSabrehavenKeywordPage, { generateMetadata } from './custom-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenKeywordPage />;
}
