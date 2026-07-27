import OfficialYurotsWebsiteKeywordPage, { generateMetadata } from './official-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsWebsiteKeywordPage />;
}
