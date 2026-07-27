import CurrentTibiaraPrivateServerKeywordPage, { generateMetadata } from './current-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraPrivateServerKeywordPage />;
}
