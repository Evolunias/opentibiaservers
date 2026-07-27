import TibiaRealMapServerRegisterKeywordPage, { generateMetadata } from './tibia-real-map-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerRegisterKeywordPage />;
}
