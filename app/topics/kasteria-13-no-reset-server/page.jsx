import Kasteria13NoResetServerKeywordPage, { generateMetadata } from './kasteria-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13NoResetServerKeywordPage />;
}
