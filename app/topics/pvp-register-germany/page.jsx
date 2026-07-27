import PvpRegisterGermanyKeywordPage, { generateMetadata } from './pvp-register-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRegisterGermanyKeywordPage />;
}
