import CustomThaisotWebsiteKeywordPage, { generateMetadata } from './custom-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotWebsiteKeywordPage />;
}
