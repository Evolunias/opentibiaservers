import FreshStartMediviaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaPrivateServerKeywordPage />;
}
