import Luminera96NoResetServerKeywordPage, { generateMetadata } from './luminera-9-6-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96NoResetServerKeywordPage />;
}
