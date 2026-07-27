import Canob14NoResetServerKeywordPage, { generateMetadata } from './canob-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14NoResetServerKeywordPage />;
}
