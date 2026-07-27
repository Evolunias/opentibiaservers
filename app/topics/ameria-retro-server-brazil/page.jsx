import AmeriaRetroServerBrazilKeywordPage, { generateMetadata } from './ameria-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRetroServerBrazilKeywordPage />;
}
