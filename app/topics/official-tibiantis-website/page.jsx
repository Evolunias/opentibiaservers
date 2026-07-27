import OfficialTibiantisWebsiteKeywordPage, { generateMetadata } from './official-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisWebsiteKeywordPage />;
}
