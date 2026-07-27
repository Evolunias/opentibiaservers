import Classicus12FreshStartServerKeywordPage, { generateMetadata } from './classicus-12-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12FreshStartServerKeywordPage />;
}
