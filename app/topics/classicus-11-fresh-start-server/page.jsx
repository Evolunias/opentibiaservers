import Classicus11FreshStartServerKeywordPage, { generateMetadata } from './classicus-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11FreshStartServerKeywordPage />;
}
