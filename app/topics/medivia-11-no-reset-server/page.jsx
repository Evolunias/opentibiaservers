import Medivia11NoResetServerKeywordPage, { generateMetadata } from './medivia-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11NoResetServerKeywordPage />;
}
