import PopularMidhemLoginKeywordPage, { generateMetadata } from './popular-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemLoginKeywordPage />;
}
