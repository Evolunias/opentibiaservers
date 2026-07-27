import Thornia11NoResetServerKeywordPage, { generateMetadata } from './thornia-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11NoResetServerKeywordPage />;
}
