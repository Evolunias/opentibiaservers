import RealMapServerListUsaKeywordPage, { generateMetadata } from './real-map-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListUsaKeywordPage />;
}
