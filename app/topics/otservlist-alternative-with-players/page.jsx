import OtservlistAlternativeWithPlayersKeywordPage, { generateMetadata } from './otservlist-alternative-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeWithPlayersKeywordPage />;
}
