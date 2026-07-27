import RealestaChileServersKeywordPage, { generateMetadata } from './realesta-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaChileServersKeywordPage />;
}
