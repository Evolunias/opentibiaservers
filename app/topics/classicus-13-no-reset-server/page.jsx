import Classicus13NoResetServerKeywordPage, { generateMetadata } from './classicus-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13NoResetServerKeywordPage />;
}
