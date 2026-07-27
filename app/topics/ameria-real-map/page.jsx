import AmeriaRealMapKeywordPage, { generateMetadata } from './ameria-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapKeywordPage />;
}
