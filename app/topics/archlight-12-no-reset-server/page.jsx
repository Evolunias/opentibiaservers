import Archlight12NoResetServerKeywordPage, { generateMetadata } from './archlight-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12NoResetServerKeywordPage />;
}
