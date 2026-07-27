import ClassickDrakoriaSwedenServersKeywordPage, { generateMetadata } from './classick-drakoria-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaSwedenServersKeywordPage />;
}
