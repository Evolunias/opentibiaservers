import LowrateMiracleRegisterKeywordPage, { generateMetadata } from './lowrate-miracle-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleRegisterKeywordPage />;
}
