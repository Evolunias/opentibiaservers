import PvpRegisterArgentinaKeywordPage, { generateMetadata } from './pvp-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRegisterArgentinaKeywordPage />;
}
