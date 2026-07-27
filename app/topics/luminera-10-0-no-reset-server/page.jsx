import Luminera100NoResetServerKeywordPage, { generateMetadata } from './luminera-10-0-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100NoResetServerKeywordPage />;
}
