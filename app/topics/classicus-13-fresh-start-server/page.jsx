import Classicus13FreshStartServerKeywordPage, { generateMetadata } from './classicus-13-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13FreshStartServerKeywordPage />;
}
