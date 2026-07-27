import BestYurotsClientKeywordPage, { generateMetadata } from './best-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsClientKeywordPage />;
}
