import NonPvpRegisterUkKeywordPage, { generateMetadata } from './non-pvp-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterUkKeywordPage />;
}
