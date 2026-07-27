import Archlight15NoResetServerKeywordPage, { generateMetadata } from './archlight-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15NoResetServerKeywordPage />;
}
