import PvpRegisterUsaKeywordPage, { generateMetadata } from './pvp-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRegisterUsaKeywordPage />;
}
