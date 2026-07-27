import PopularMidhemOtServerKeywordPage, { generateMetadata } from './popular-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemOtServerKeywordPage />;
}
