import ActiveMediviaServerKeywordPage, { generateMetadata } from './active-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaServerKeywordPage />;
}
