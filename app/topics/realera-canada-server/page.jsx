import RealeraCanadaServerKeywordPage, { generateMetadata } from './realera-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCanadaServerKeywordPage />;
}
