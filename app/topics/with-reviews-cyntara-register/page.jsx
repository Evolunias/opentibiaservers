import WithReviewsCyntaraRegisterKeywordPage, { generateMetadata } from './with-reviews-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraRegisterKeywordPage />;
}
