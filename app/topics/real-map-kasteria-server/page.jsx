import RealMapKasteriaServerKeywordPage, { generateMetadata } from './real-map-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaServerKeywordPage />;
}
