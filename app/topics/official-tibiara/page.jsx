import OfficialTibiaraKeywordPage, { generateMetadata } from './official-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraKeywordPage />;
}
