import Midhem11NoResetServerKeywordPage, { generateMetadata } from './midhem-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11NoResetServerKeywordPage />;
}
