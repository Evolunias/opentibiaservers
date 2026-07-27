import Tibia74RealMapServerListKeywordPage, { generateMetadata } from './tibia-7-4-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapServerListKeywordPage />;
}
