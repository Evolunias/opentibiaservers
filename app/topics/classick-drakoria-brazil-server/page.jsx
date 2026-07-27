import ClassickDrakoriaBrazilServerKeywordPage, { generateMetadata } from './classick-drakoria-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaBrazilServerKeywordPage />;
}
