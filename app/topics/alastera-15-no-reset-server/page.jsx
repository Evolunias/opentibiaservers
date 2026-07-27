import Alastera15NoResetServerKeywordPage, { generateMetadata } from './alastera-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15NoResetServerKeywordPage />;
}
