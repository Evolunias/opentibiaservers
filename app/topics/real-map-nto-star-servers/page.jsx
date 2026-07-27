import RealMapNtoStarServersKeywordPage, { generateMetadata } from './real-map-nto-star-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarServersKeywordPage />;
}
