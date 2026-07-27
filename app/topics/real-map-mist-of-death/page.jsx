import RealMapMistOfDeathKeywordPage, { generateMetadata } from './real-map-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMistOfDeathKeywordPage />;
}
