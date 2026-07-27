import BestYurotsOtsKeywordPage, { generateMetadata } from './best-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsOtsKeywordPage />;
}
