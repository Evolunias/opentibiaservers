import AmeriaMapKeywordPage, { generateMetadata } from './ameria-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaMapKeywordPage />;
}
