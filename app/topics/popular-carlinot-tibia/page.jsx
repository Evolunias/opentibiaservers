import PopularCarlinotTibiaKeywordPage, { generateMetadata } from './popular-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotTibiaKeywordPage />;
}
