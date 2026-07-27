import Oldera12NoResetServerKeywordPage, { generateMetadata } from './oldera-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12NoResetServerKeywordPage />;
}
