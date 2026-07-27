import PopularSaintsotOpenTibiaKeywordPage, { generateMetadata } from './popular-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotOpenTibiaKeywordPage />;
}
