import PvpRegisterUkKeywordPage, { generateMetadata } from './pvp-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRegisterUkKeywordPage />;
}
