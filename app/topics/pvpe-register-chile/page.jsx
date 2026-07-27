import PvpeRegisterChileKeywordPage, { generateMetadata } from './pvpe-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRegisterChileKeywordPage />;
}
