import NonPvpRegisterMexicoKeywordPage, { generateMetadata } from './non-pvp-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterMexicoKeywordPage />;
}
