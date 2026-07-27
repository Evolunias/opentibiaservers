import MistOfDeathSimilarServersKeywordPage, { generateMetadata } from './mist-of-death-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathSimilarServersKeywordPage />;
}
