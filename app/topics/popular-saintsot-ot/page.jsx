import PopularSaintsotOtKeywordPage, { generateMetadata } from './popular-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotOtKeywordPage />;
}
