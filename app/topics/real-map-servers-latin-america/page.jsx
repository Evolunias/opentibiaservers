import RealMapServersLatinAmericaKeywordPage, { generateMetadata } from './real-map-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServersLatinAmericaKeywordPage />;
}
