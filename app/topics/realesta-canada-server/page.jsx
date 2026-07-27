import RealestaCanadaServerKeywordPage, { generateMetadata } from './realesta-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCanadaServerKeywordPage />;
}
