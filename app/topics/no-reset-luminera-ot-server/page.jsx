import NoResetLumineraOtServerKeywordPage, { generateMetadata } from './no-reset-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraOtServerKeywordPage />;
}
