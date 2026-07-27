import RealMapClientLatinAmericaKeywordPage, { generateMetadata } from './real-map-client-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientLatinAmericaKeywordPage />;
}
