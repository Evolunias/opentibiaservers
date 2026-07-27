import ClassickDrakoriaNorthAmericaServerKeywordPage, { generateMetadata } from './classick-drakoria-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaNorthAmericaServerKeywordPage />;
}
