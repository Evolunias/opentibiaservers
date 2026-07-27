import NewAmeriaLoginKeywordPage, { generateMetadata } from './new-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaLoginKeywordPage />;
}
