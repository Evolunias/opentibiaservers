import TopMediviaPrivateServerKeywordPage, { generateMetadata } from './top-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaPrivateServerKeywordPage />;
}
