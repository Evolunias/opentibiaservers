import NoResetLumineraOtsKeywordPage, { generateMetadata } from './no-reset-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraOtsKeywordPage />;
}
