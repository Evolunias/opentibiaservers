import Classicus15NoResetServerKeywordPage, { generateMetadata } from './classicus-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15NoResetServerKeywordPage />;
}
