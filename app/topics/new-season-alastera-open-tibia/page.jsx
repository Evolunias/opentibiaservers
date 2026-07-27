import NewSeasonAlasteraOpenTibiaKeywordPage, { generateMetadata } from './new-season-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraOpenTibiaKeywordPage />;
}
