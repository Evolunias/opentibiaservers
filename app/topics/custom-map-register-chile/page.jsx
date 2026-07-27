import CustomMapRegisterChileKeywordPage, { generateMetadata } from './custom-map-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterChileKeywordPage />;
}
