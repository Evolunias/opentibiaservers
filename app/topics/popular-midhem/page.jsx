import PopularMidhemKeywordPage, { generateMetadata } from './popular-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemKeywordPage />;
}
