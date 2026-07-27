import Luminera13FreshStartServerKeywordPage, { generateMetadata } from './luminera-13-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13FreshStartServerKeywordPage />;
}
