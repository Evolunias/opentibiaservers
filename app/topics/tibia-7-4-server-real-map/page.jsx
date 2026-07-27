import Tibia74ServerRealMapKeywordPage, { generateMetadata } from './tibia-7-4-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerRealMapKeywordPage />;
}
