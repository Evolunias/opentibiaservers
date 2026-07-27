import Classicus14NoResetServerKeywordPage, { generateMetadata } from './classicus-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14NoResetServerKeywordPage />;
}
