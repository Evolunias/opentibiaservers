import Kasteria12NoResetServerKeywordPage, { generateMetadata } from './kasteria-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12NoResetServerKeywordPage />;
}
