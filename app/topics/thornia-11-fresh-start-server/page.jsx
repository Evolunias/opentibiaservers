import Thornia11FreshStartServerKeywordPage, { generateMetadata } from './thornia-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11FreshStartServerKeywordPage />;
}
