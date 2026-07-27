import PopularSaintsotOfficialKeywordPage, { generateMetadata } from './popular-saintsot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotOfficialKeywordPage />;
}
