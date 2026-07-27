import ClassickDrakoriaBrazilServersKeywordPage, { generateMetadata } from './classick-drakoria-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaBrazilServersKeywordPage />;
}
