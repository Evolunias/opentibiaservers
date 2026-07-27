import ActiveMediviaClientKeywordPage, { generateMetadata } from './active-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaClientKeywordPage />;
}
