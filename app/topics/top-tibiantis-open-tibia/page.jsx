import TopTibiantisOpenTibiaKeywordPage, { generateMetadata } from './top-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisOpenTibiaKeywordPage />;
}
