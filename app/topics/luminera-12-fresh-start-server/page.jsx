import Luminera12FreshStartServerKeywordPage, { generateMetadata } from './luminera-12-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12FreshStartServerKeywordPage />;
}
