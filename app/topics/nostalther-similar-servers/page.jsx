import NostaltherSimilarServersKeywordPage, { generateMetadata } from './nostalther-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherSimilarServersKeywordPage />;
}
