import BestYurotsOtKeywordPage, { generateMetadata } from './best-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsOtKeywordPage />;
}
