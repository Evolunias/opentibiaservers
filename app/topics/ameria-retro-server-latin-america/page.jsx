import AmeriaRetroServerLatinAmericaKeywordPage, { generateMetadata } from './ameria-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRetroServerLatinAmericaKeywordPage />;
}
