import RealMapSerenityKeywordPage, { generateMetadata } from './real-map-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityKeywordPage />;
}
