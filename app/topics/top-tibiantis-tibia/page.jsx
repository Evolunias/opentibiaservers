import TopTibiantisTibiaKeywordPage, { generateMetadata } from './top-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisTibiaKeywordPage />;
}
