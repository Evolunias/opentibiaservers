import OxygenotRetroServerLatinAmericaKeywordPage, { generateMetadata } from './oxygenot-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRetroServerLatinAmericaKeywordPage />;
}
