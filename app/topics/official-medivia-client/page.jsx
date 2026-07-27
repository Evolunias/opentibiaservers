import OfficialMediviaClientKeywordPage, { generateMetadata } from './official-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaClientKeywordPage />;
}
