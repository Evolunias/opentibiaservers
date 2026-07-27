import PopularImperianicOpenTibiaKeywordPage, { generateMetadata } from './popular-imperianic-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicOpenTibiaKeywordPage />;
}
