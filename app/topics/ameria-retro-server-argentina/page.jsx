import AmeriaRetroServerArgentinaKeywordPage, { generateMetadata } from './ameria-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRetroServerArgentinaKeywordPage />;
}
