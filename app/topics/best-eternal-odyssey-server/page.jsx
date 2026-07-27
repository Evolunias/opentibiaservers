import BestEternalOdysseyServerKeywordPage, { generateMetadata } from './best-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEternalOdysseyServerKeywordPage />;
}
