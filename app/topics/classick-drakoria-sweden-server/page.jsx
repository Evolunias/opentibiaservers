import ClassickDrakoriaSwedenServerKeywordPage, { generateMetadata } from './classick-drakoria-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaSwedenServerKeywordPage />;
}
