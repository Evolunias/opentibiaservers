import Thaisot15NoResetServerKeywordPage, { generateMetadata } from './thaisot-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15NoResetServerKeywordPage />;
}
