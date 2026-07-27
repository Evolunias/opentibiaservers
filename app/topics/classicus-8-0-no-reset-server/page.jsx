import Classicus80NoResetServerKeywordPage, { generateMetadata } from './classicus-8-0-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80NoResetServerKeywordPage />;
}
