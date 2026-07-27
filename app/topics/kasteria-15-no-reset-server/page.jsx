import Kasteria15NoResetServerKeywordPage, { generateMetadata } from './kasteria-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15NoResetServerKeywordPage />;
}
