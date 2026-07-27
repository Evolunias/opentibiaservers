import RealestaPolandServersKeywordPage, { generateMetadata } from './realesta-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaPolandServersKeywordPage />;
}
