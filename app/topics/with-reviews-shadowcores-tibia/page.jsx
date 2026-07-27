import WithReviewsShadowcoresTibiaKeywordPage, { generateMetadata } from './with-reviews-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresTibiaKeywordPage />;
}
