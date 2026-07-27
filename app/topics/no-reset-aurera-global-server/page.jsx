import NoResetAureraGlobalServerKeywordPage, { generateMetadata } from './no-reset-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAureraGlobalServerKeywordPage />;
}
