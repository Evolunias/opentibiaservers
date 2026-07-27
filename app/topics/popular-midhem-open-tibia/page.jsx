import PopularMidhemOpenTibiaKeywordPage, { generateMetadata } from './popular-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemOpenTibiaKeywordPage />;
}
