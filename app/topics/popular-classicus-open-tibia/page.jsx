import PopularClassicusOpenTibiaKeywordPage, { generateMetadata } from './popular-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusOpenTibiaKeywordPage />;
}
