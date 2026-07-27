import Kasteria11FreshStartServerKeywordPage, { generateMetadata } from './kasteria-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11FreshStartServerKeywordPage />;
}
