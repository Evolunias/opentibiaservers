import NewAmeriaOfficialKeywordPage, { generateMetadata } from './new-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaOfficialKeywordPage />;
}
