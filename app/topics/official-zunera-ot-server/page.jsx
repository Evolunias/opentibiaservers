import OfficialZuneraOtServerKeywordPage, { generateMetadata } from './official-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZuneraOtServerKeywordPage />;
}
