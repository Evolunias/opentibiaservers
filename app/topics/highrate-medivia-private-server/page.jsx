import HighrateMediviaPrivateServerKeywordPage, { generateMetadata } from './highrate-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaPrivateServerKeywordPage />;
}
