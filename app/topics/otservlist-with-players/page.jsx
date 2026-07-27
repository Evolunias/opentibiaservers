import OtservlistWithPlayersKeywordPage, { generateMetadata } from './otservlist-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistWithPlayersKeywordPage />;
}
