import ActiveMediviaOfficialKeywordPage, { generateMetadata } from './active-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaOfficialKeywordPage />;
}
