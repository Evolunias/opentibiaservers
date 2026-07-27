import HighrateAmeriaOfficialKeywordPage, { generateMetadata } from './highrate-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaOfficialKeywordPage />;
}
