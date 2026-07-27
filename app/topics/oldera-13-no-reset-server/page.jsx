import Oldera13NoResetServerKeywordPage, { generateMetadata } from './oldera-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13NoResetServerKeywordPage />;
}
