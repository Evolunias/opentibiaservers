import Classicus15FreshStartServerKeywordPage, { generateMetadata } from './classicus-15-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15FreshStartServerKeywordPage />;
}
