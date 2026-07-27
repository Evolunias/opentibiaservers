import OfficialAureraGlobalWebsiteKeywordPage, { generateMetadata } from './official-aurera-global-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalWebsiteKeywordPage />;
}
