import PopularMiracleRegisterKeywordPage, { generateMetadata } from './popular-miracle-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleRegisterKeywordPage />;
}
