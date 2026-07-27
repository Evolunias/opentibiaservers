import TopNtoStarOtKeywordPage, { generateMetadata } from './top-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNtoStarOtKeywordPage />;
}
