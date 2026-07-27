import RealMapLumineraRegisterKeywordPage, { generateMetadata } from './real-map-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraRegisterKeywordPage />;
}
