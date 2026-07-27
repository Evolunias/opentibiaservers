import BestNilotOtKeywordPage, { generateMetadata } from './best-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotOtKeywordPage />;
}
