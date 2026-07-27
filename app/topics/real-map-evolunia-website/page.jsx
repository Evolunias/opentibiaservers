import RealMapEvoluniaWebsiteKeywordPage, { generateMetadata } from './real-map-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaWebsiteKeywordPage />;
}
