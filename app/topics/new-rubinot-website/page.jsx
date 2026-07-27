import NewRubinotWebsiteKeywordPage, { generateMetadata } from './new-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotWebsiteKeywordPage />;
}
