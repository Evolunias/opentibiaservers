import RealMapRegisterPolandKeywordPage, { generateMetadata } from './real-map-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRegisterPolandKeywordPage />;
}
