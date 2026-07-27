import Tibiascape11FreshStartServerKeywordPage, { generateMetadata } from './tibiascape-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11FreshStartServerKeywordPage />;
}
