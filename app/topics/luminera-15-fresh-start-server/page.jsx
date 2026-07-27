import Luminera15FreshStartServerKeywordPage, { generateMetadata } from './luminera-15-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15FreshStartServerKeywordPage />;
}
