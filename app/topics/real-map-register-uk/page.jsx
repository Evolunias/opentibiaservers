import RealMapRegisterUkKeywordPage, { generateMetadata } from './real-map-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRegisterUkKeywordPage />;
}
