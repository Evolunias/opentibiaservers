import ActiveMediviaOtsKeywordPage, { generateMetadata } from './active-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaOtsKeywordPage />;
}
