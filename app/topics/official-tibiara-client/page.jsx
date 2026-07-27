import OfficialTibiaraClientKeywordPage, { generateMetadata } from './official-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraClientKeywordPage />;
}
