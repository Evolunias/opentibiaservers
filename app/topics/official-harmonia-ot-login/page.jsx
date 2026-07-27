import OfficialHarmoniaOtLoginKeywordPage, { generateMetadata } from './official-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtLoginKeywordPage />;
}
