import Tibiascape12FreshStartServerKeywordPage, { generateMetadata } from './tibiascape-12-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12FreshStartServerKeywordPage />;
}
