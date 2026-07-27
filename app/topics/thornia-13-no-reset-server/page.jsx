import Thornia13NoResetServerKeywordPage, { generateMetadata } from './thornia-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13NoResetServerKeywordPage />;
}
