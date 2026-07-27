import DuraOnlineSimilarServersKeywordPage, { generateMetadata } from './dura-online-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSimilarServersKeywordPage />;
}
