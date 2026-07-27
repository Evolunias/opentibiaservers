import NewMediviaPrivateServerKeywordPage, { generateMetadata } from './new-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaPrivateServerKeywordPage />;
}
