import TopAmeriaOfficialKeywordPage, { generateMetadata } from './top-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaOfficialKeywordPage />;
}
