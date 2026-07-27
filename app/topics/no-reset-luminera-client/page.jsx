import NoResetLumineraClientKeywordPage, { generateMetadata } from './no-reset-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraClientKeywordPage />;
}
