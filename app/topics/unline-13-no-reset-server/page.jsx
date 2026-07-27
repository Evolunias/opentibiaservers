import Unline13NoResetServerKeywordPage, { generateMetadata } from './unline-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13NoResetServerKeywordPage />;
}
