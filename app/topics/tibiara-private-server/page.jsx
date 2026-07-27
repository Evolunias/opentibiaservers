import TibiaraPrivateServerKeywordPage, { generateMetadata } from './tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPrivateServerKeywordPage />;
}
