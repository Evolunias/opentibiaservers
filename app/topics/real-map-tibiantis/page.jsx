import RealMapTibiantisKeywordPage, { generateMetadata } from './real-map-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisKeywordPage />;
}
