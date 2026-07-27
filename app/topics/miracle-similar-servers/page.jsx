import MiracleSimilarServersKeywordPage, { generateMetadata } from './miracle-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSimilarServersKeywordPage />;
}
