import SerenityRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './serenity-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRealMapServerLatinAmericaKeywordPage />;
}
