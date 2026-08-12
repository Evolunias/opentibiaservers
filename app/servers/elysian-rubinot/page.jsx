import ElysianRubinotServerReviewPage, { generateMetadata } from './elysian-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElysianRubinotServerReviewPage />;
}
