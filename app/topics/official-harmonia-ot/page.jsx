import OfficialHarmoniaOtKeywordPage, { generateMetadata } from './official-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtKeywordPage />;
}
