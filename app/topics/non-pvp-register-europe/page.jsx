import NonPvpRegisterEuropeKeywordPage, { generateMetadata } from './non-pvp-register-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRegisterEuropeKeywordPage />;
}
