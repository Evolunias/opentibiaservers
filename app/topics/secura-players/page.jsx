import SecuraPlayersKeywordPage, { generateMetadata } from './secura-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraPlayersKeywordPage />;
}
