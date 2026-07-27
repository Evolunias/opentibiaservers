import NoResetClassicusServerKeywordPage, { generateMetadata } from './no-reset-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusServerKeywordPage />;
}
