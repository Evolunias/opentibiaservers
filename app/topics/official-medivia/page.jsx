import OfficialMediviaKeywordPage, { generateMetadata } from './official-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaKeywordPage />;
}
