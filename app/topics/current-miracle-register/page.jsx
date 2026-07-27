import CurrentMiracleRegisterKeywordPage, { generateMetadata } from './current-miracle-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleRegisterKeywordPage />;
}
