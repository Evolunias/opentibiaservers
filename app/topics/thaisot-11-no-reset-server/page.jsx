import Thaisot11NoResetServerKeywordPage, { generateMetadata } from './thaisot-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11NoResetServerKeywordPage />;
}
