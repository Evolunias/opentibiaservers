import Medivia15NoResetServerKeywordPage, { generateMetadata } from './medivia-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15NoResetServerKeywordPage />;
}
