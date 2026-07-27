import PvpRegisterMexicoKeywordPage, { generateMetadata } from './pvp-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRegisterMexicoKeywordPage />;
}
