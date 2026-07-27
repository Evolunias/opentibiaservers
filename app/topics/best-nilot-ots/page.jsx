import BestNilotOtsKeywordPage, { generateMetadata } from './best-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotOtsKeywordPage />;
}
