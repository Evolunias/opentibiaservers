import RealMapKasteriaLoginKeywordPage, { generateMetadata } from './real-map-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaLoginKeywordPage />;
}
