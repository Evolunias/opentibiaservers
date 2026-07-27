import Luminera14NoResetServerKeywordPage, { generateMetadata } from './luminera-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14NoResetServerKeywordPage />;
}
