import TibiantisRealMapKeywordPage, { generateMetadata } from './tibiantis-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRealMapKeywordPage />;
}
