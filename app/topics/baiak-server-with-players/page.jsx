import BaiakServerWithPlayersKeywordPage, { generateMetadata } from './baiak-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerWithPlayersKeywordPage />;
}
