import AmeriaOfficialKeywordPage, { generateMetadata } from './ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaOfficialKeywordPage />;
}
