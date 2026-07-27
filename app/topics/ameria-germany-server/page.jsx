import AmeriaGermanyServerKeywordPage, { generateMetadata } from './ameria-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaGermanyServerKeywordPage />;
}
