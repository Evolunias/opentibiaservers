import ElderaSimilarServersKeywordPage, { generateMetadata } from './eldera-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaSimilarServersKeywordPage />;
}
