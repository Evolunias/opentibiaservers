import NonPvpRegisterPolandKeywordPage, { generateMetadata } from './non-pvp-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterPolandKeywordPage />;
}
