import ClassickDrakoriaSimilarServersKeywordPage, { generateMetadata } from './classick-drakoria-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaSimilarServersKeywordPage />;
}
