import OfficialZuneraOtClientKeywordPage, { generateMetadata } from './official-zunera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZuneraOtClientKeywordPage />;
}
