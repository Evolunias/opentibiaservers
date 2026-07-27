import TibiaCustomServerRealMapKeywordPage, { generateMetadata } from './tibia-custom-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerRealMapKeywordPage />;
}
