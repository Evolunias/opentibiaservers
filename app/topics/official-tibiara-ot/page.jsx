import OfficialTibiaraOtKeywordPage, { generateMetadata } from './official-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraOtKeywordPage />;
}
