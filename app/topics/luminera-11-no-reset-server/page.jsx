import Luminera11NoResetServerKeywordPage, { generateMetadata } from './luminera-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11NoResetServerKeywordPage />;
}
