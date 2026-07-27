import OtclientWithPlayersKeywordPage, { generateMetadata } from './otclient-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientWithPlayersKeywordPage />;
}
