import OfficialTibiascapeWebsiteKeywordPage, { generateMetadata } from './official-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeWebsiteKeywordPage />;
}
