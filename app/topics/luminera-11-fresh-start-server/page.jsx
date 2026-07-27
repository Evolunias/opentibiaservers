import Luminera11FreshStartServerKeywordPage, { generateMetadata } from './luminera-11-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11FreshStartServerKeywordPage />;
}
