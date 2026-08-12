import SerenianRubinotServerReviewPage, { generateMetadata } from './serenian-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenianRubinotServerReviewPage />;
}
