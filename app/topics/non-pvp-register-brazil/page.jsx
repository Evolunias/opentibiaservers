import NonPvpRegisterBrazilKeywordPage, { generateMetadata } from './non-pvp-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterBrazilKeywordPage />;
}
