import NewAmeriaClientKeywordPage, { generateMetadata } from './new-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaClientKeywordPage />;
}
