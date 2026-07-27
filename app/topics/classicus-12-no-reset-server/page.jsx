import Classicus12NoResetServerKeywordPage, { generateMetadata } from './classicus-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12NoResetServerKeywordPage />;
}
