import RealMapTibiaraRegisterKeywordPage, { generateMetadata } from './real-map-tibiara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraRegisterKeywordPage />;
}
