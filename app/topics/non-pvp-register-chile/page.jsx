import NonPvpRegisterChileKeywordPage, { generateMetadata } from './non-pvp-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterChileKeywordPage />;
}
