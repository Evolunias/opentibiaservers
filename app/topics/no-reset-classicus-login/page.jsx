import NoResetClassicusLoginKeywordPage, { generateMetadata } from './no-reset-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusLoginKeywordPage />;
}
