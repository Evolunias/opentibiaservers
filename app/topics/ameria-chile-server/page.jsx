import AmeriaChileServerKeywordPage, { generateMetadata } from './ameria-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaChileServerKeywordPage />;
}
