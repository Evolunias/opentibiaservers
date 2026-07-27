import Canob15NoResetServerKeywordPage, { generateMetadata } from './canob-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15NoResetServerKeywordPage />;
}
