import OfficialMediviaLoginKeywordPage, { generateMetadata } from './official-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaLoginKeywordPage />;
}
