import OfficialCalmeraOtPrivateServerKeywordPage, { generateMetadata } from './official-calmera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtPrivateServerKeywordPage />;
}
