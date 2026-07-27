import Luminera86NoResetServerKeywordPage, { generateMetadata } from './luminera-8-6-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86NoResetServerKeywordPage />;
}
