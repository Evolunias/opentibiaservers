import Blazera11NoResetServerKeywordPage, { generateMetadata } from './blazera-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11NoResetServerKeywordPage />;
}
