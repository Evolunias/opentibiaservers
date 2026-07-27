import SerenityRealMapServerCanadaKeywordPage, { generateMetadata } from './serenity-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRealMapServerCanadaKeywordPage />;
}
