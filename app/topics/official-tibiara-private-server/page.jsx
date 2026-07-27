import OfficialTibiaraPrivateServerKeywordPage, { generateMetadata } from './official-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraPrivateServerKeywordPage />;
}
