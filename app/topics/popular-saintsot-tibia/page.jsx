import PopularSaintsotTibiaKeywordPage, { generateMetadata } from './popular-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotTibiaKeywordPage />;
}
