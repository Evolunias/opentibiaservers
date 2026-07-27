import RealMapStatusLatinAmericaKeywordPage, { generateMetadata } from './real-map-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusLatinAmericaKeywordPage />;
}
