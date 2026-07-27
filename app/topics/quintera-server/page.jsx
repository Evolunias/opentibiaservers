import QuinteraServerKeywordPage, { generateMetadata } from './quintera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraServerKeywordPage />;
}
