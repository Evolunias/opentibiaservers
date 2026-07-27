import NoResetLumineraServerKeywordPage, { generateMetadata } from './no-reset-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraServerKeywordPage />;
}
