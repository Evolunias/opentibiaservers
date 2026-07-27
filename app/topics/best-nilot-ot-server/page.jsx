import BestNilotOtServerKeywordPage, { generateMetadata } from './best-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotOtServerKeywordPage />;
}
