import Luminera15NoResetServerKeywordPage, { generateMetadata } from './luminera-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15NoResetServerKeywordPage />;
}
