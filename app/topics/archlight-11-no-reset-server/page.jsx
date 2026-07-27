import Archlight11NoResetServerKeywordPage, { generateMetadata } from './archlight-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11NoResetServerKeywordPage />;
}
