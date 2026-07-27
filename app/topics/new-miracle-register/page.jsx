import NewMiracleRegisterKeywordPage, { generateMetadata } from './new-miracle-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleRegisterKeywordPage />;
}
