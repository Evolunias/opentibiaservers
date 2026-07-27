import Kasteria14NoResetServerKeywordPage, { generateMetadata } from './kasteria-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14NoResetServerKeywordPage />;
}
