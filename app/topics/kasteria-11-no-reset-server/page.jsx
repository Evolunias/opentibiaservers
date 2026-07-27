import Kasteria11NoResetServerKeywordPage, { generateMetadata } from './kasteria-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11NoResetServerKeywordPage />;
}
