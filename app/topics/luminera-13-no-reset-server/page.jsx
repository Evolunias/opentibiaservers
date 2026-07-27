import Luminera13NoResetServerKeywordPage, { generateMetadata } from './luminera-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13NoResetServerKeywordPage />;
}
