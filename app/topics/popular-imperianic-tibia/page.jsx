import PopularImperianicTibiaKeywordPage, { generateMetadata } from './popular-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicTibiaKeywordPage />;
}
