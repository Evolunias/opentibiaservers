import Thornia12NoResetServerKeywordPage, { generateMetadata } from './thornia-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12NoResetServerKeywordPage />;
}
