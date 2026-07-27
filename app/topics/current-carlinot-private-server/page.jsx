import CurrentCarlinotPrivateServerKeywordPage, { generateMetadata } from './current-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotPrivateServerKeywordPage />;
}
