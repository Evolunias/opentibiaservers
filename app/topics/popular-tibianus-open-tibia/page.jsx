import PopularTibianusOpenTibiaKeywordPage, { generateMetadata } from './popular-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusOpenTibiaKeywordPage />;
}
