import Thornia14NoResetServerKeywordPage, { generateMetadata } from './thornia-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14NoResetServerKeywordPage />;
}
