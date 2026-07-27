import Luminera96FreshStartServerKeywordPage, { generateMetadata } from './luminera-9-6-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96FreshStartServerKeywordPage />;
}
