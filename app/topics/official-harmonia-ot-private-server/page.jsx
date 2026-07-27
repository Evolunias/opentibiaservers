import OfficialHarmoniaOtPrivateServerKeywordPage, { generateMetadata } from './official-harmonia-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtPrivateServerKeywordPage />;
}
