import TopSaintsotOpenTibiaKeywordPage, { generateMetadata } from './top-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotOpenTibiaKeywordPage />;
}
