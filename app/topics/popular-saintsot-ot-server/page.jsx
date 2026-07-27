import PopularSaintsotOtServerKeywordPage, { generateMetadata } from './popular-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotOtServerKeywordPage />;
}
