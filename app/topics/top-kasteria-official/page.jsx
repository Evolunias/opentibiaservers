import TopKasteriaOfficialKeywordPage, { generateMetadata } from './top-kasteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaOfficialKeywordPage />;
}
