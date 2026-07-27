import NoResetLumineraOtKeywordPage, { generateMetadata } from './no-reset-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraOtKeywordPage />;
}
