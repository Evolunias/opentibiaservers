import Thornia15NoResetServerKeywordPage, { generateMetadata } from './thornia-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15NoResetServerKeywordPage />;
}
