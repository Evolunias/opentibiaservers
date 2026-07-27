import OfficialTibiaraOtServerKeywordPage, { generateMetadata } from './official-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraOtServerKeywordPage />;
}
