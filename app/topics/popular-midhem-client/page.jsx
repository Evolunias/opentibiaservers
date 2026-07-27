import PopularMidhemClientKeywordPage, { generateMetadata } from './popular-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemClientKeywordPage />;
}
