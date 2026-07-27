import SerenityRealMapServerGermanyKeywordPage, { generateMetadata } from './serenity-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRealMapServerGermanyKeywordPage />;
}
