import Midhem15NoResetServerKeywordPage, { generateMetadata } from './midhem-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15NoResetServerKeywordPage />;
}
