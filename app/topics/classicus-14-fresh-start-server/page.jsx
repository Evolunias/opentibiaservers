import Classicus14FreshStartServerKeywordPage, { generateMetadata } from './classicus-14-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14FreshStartServerKeywordPage />;
}
