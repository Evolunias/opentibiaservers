import RealMapRegisterLatinAmericaKeywordPage, { generateMetadata } from './real-map-register-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRegisterLatinAmericaKeywordPage />;
}
