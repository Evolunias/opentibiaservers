import OfficialMediviaOtsKeywordPage, { generateMetadata } from './official-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaOtsKeywordPage />;
}
