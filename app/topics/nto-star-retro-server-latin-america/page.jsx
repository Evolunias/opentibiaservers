import NtoStarRetroServerLatinAmericaKeywordPage, { generateMetadata } from './nto-star-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerLatinAmericaKeywordPage />;
}
