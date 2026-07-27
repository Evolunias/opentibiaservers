import Oldera11NoResetServerKeywordPage, { generateMetadata } from './oldera-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11NoResetServerKeywordPage />;
}
