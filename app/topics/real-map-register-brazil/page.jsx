import RealMapRegisterBrazilKeywordPage, { generateMetadata } from './real-map-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRegisterBrazilKeywordPage />;
}
