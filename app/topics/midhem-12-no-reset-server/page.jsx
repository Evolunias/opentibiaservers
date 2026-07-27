import Midhem12NoResetServerKeywordPage, { generateMetadata } from './midhem-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12NoResetServerKeywordPage />;
}
