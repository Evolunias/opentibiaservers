import OfficialMediviaOtKeywordPage, { generateMetadata } from './official-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaOtKeywordPage />;
}
