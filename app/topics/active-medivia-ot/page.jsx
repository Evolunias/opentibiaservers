import ActiveMediviaOtKeywordPage, { generateMetadata } from './active-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaOtKeywordPage />;
}
