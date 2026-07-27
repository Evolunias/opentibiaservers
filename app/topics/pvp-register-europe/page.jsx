import PvpRegisterEuropeKeywordPage, { generateMetadata } from './pvp-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpRegisterEuropeKeywordPage />;
}
