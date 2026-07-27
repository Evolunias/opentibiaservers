import LowrateTibiaraPrivateServerKeywordPage, { generateMetadata } from './lowrate-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraPrivateServerKeywordPage />;
}
