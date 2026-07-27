import TopSaintsotClientKeywordPage, { generateMetadata } from './top-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotClientKeywordPage />;
}
