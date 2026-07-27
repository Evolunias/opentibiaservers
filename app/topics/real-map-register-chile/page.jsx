import RealMapRegisterChileKeywordPage, { generateMetadata } from './real-map-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRegisterChileKeywordPage />;
}
