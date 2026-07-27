import NoResetCalmeraOtLoginKeywordPage, { generateMetadata } from './no-reset-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCalmeraOtLoginKeywordPage />;
}
