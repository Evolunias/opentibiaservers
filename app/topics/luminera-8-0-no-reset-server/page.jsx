import Luminera80NoResetServerKeywordPage, { generateMetadata } from './luminera-8-0-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80NoResetServerKeywordPage />;
}
