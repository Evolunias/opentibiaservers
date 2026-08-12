import ReturnOfTheSaiyansServerReviewPage, { generateMetadata } from './return-of-the-saiyans';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReturnOfTheSaiyansServerReviewPage />;
}
