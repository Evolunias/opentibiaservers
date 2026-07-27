import Midhem13NoResetServerKeywordPage, { generateMetadata } from './midhem-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13NoResetServerKeywordPage />;
}
