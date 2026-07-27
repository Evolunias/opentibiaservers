import OfficialTibiascapeOfficialKeywordPage, { generateMetadata } from './official-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeOfficialKeywordPage />;
}
