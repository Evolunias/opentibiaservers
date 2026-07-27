import SerenityRealMapServerPolandKeywordPage, { generateMetadata } from './serenity-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRealMapServerPolandKeywordPage />;
}
