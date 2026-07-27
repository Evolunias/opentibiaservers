import OfficialHarmoniaOtClientKeywordPage, { generateMetadata } from './official-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtClientKeywordPage />;
}
