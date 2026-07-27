import ClassickDrakoriaMexicoServerKeywordPage, { generateMetadata } from './classick-drakoria-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaMexicoServerKeywordPage />;
}
