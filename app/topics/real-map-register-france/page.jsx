import RealMapRegisterFranceKeywordPage, { generateMetadata } from './real-map-register-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRegisterFranceKeywordPage />;
}
