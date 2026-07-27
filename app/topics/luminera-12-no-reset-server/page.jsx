import Luminera12NoResetServerKeywordPage, { generateMetadata } from './luminera-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12NoResetServerKeywordPage />;
}
