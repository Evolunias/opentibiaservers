import ActiveMediviaPrivateServerKeywordPage, { generateMetadata } from './active-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaPrivateServerKeywordPage />;
}
