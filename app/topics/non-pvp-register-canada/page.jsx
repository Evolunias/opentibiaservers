import NonPvpRegisterCanadaKeywordPage, { generateMetadata } from './non-pvp-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterCanadaKeywordPage />;
}
