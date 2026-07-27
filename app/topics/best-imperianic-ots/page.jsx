import BestImperianicOtsKeywordPage, { generateMetadata } from './best-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicOtsKeywordPage />;
}
