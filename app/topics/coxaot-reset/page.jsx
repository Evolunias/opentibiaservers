import CoxaotResetKeywordPage, { generateMetadata } from './coxaot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotResetKeywordPage />;
}
