import Oldera15NoResetServerKeywordPage, { generateMetadata } from './oldera-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15NoResetServerKeywordPage />;
}
