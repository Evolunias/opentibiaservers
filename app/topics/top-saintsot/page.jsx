import TopSaintsotKeywordPage, { generateMetadata } from './top-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotKeywordPage />;
}
