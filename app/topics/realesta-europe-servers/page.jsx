import RealestaEuropeServersKeywordPage, { generateMetadata } from './realesta-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaEuropeServersKeywordPage />;
}
