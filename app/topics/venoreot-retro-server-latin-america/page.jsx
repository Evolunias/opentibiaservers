import VenoreotRetroServerLatinAmericaKeywordPage, { generateMetadata } from './venoreot-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerLatinAmericaKeywordPage />;
}
