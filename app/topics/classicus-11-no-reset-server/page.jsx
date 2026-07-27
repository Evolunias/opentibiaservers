import Classicus11NoResetServerKeywordPage, { generateMetadata } from './classicus-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11NoResetServerKeywordPage />;
}
