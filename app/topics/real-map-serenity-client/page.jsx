import RealMapSerenityClientKeywordPage, { generateMetadata } from './real-map-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityClientKeywordPage />;
}
