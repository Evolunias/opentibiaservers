import NonPvpRegisterUsaKeywordPage, { generateMetadata } from './non-pvp-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterUsaKeywordPage />;
}
