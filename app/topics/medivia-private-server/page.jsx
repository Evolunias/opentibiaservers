import MediviaPrivateServerKeywordPage, { generateMetadata } from './medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPrivateServerKeywordPage />;
}
