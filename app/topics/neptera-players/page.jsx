import NepteraPlayersKeywordPage, { generateMetadata } from './neptera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraPlayersKeywordPage />;
}
