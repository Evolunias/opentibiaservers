import OfficialTibiaraServerKeywordPage, { generateMetadata } from './official-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraServerKeywordPage />;
}
