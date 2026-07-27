import Luminera14FreshStartServerKeywordPage, { generateMetadata } from './luminera-14-fresh-start-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14FreshStartServerKeywordPage />;
}
