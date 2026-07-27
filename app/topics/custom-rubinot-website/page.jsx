import CustomRubinotWebsiteKeywordPage, { generateMetadata } from './custom-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotWebsiteKeywordPage />;
}
