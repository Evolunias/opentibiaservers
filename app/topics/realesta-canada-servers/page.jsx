import RealestaCanadaServersKeywordPage, { generateMetadata } from './realesta-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCanadaServersKeywordPage />;
}
