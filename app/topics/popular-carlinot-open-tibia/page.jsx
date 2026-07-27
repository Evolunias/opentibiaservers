import PopularCarlinotOpenTibiaKeywordPage, { generateMetadata } from './popular-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotOpenTibiaKeywordPage />;
}
