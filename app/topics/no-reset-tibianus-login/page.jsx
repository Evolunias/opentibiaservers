import NoResetTibianusLoginKeywordPage, { generateMetadata } from './no-reset-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusLoginKeywordPage />;
}
