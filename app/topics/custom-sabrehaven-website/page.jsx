import CustomSabrehavenWebsiteKeywordPage, { generateMetadata } from './custom-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenWebsiteKeywordPage />;
}
