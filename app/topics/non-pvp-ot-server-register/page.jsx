import NonPvpOtServerRegisterKeywordPage, { generateMetadata } from './non-pvp-ot-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerRegisterKeywordPage />;
}
