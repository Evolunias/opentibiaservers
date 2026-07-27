import CurrentMediviaPrivateServerKeywordPage, { generateMetadata } from './current-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaPrivateServerKeywordPage />;
}
