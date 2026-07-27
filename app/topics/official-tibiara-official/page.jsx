import OfficialTibiaraOfficialKeywordPage, { generateMetadata } from './official-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraOfficialKeywordPage />;
}
