import NepreniaRetroServerLatinAmericaKeywordPage, { generateMetadata } from './neprenia-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRetroServerLatinAmericaKeywordPage />;
}
