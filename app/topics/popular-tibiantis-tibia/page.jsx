import PopularTibiantisTibiaKeywordPage, { generateMetadata } from './popular-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisTibiaKeywordPage />;
}
