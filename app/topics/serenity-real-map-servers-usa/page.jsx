import SerenityRealMapServersUsaKeywordPage, { generateMetadata } from './serenity-real-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRealMapServersUsaKeywordPage />;
}
