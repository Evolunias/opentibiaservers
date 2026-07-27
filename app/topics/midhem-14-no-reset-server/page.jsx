import Midhem14NoResetServerKeywordPage, { generateMetadata } from './midhem-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14NoResetServerKeywordPage />;
}
