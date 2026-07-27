import InfernaPlayersKeywordPage, { generateMetadata } from './inferna-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaPlayersKeywordPage />;
}
