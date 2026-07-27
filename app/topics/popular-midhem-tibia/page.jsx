import PopularMidhemTibiaKeywordPage, { generateMetadata } from './popular-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemTibiaKeywordPage />;
}
