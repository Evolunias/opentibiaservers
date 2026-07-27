import LumineraPlayersKeywordPage, { generateMetadata } from './luminera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPlayersKeywordPage />;
}
