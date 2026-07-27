import Ameria15NoResetServerKeywordPage, { generateMetadata } from './ameria-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15NoResetServerKeywordPage />;
}
