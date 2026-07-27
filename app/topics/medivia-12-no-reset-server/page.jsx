import Medivia12NoResetServerKeywordPage, { generateMetadata } from './medivia-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12NoResetServerKeywordPage />;
}
