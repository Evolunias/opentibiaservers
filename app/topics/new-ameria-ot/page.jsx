import NewAmeriaOtKeywordPage, { generateMetadata } from './new-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaOtKeywordPage />;
}
