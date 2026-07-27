import RealeraCanadaServersKeywordPage, { generateMetadata } from './realera-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCanadaServersKeywordPage />;
}
