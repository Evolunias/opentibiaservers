import OtlandWithPlayersKeywordPage, { generateMetadata } from './otland-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandWithPlayersKeywordPage />;
}
