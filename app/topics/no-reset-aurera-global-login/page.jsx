import NoResetAureraGlobalLoginKeywordPage, { generateMetadata } from './no-reset-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAureraGlobalLoginKeywordPage />;
}
