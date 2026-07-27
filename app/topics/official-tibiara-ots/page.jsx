import OfficialTibiaraOtsKeywordPage, { generateMetadata } from './official-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraOtsKeywordPage />;
}
