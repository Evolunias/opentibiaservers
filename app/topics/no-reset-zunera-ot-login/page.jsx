import NoResetZuneraOtLoginKeywordPage, { generateMetadata } from './no-reset-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetZuneraOtLoginKeywordPage />;
}
