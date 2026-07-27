import ActiveMediviaOtServerKeywordPage, { generateMetadata } from './active-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaOtServerKeywordPage />;
}
