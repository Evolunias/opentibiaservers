import NonPvpRegisterSwedenKeywordPage, { generateMetadata } from './non-pvp-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterSwedenKeywordPage />;
}
