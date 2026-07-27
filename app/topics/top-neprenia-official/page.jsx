import TopNepreniaOfficialKeywordPage, { generateMetadata } from './top-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaOfficialKeywordPage />;
}
