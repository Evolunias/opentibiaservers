import AmeriaRetroServerMexicoKeywordPage, { generateMetadata } from './ameria-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRetroServerMexicoKeywordPage />;
}
