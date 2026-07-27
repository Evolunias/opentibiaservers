import RealMapSerenityLoginKeywordPage, { generateMetadata } from './real-map-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityLoginKeywordPage />;
}
