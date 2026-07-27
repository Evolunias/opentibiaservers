import NoResetClassicusKeywordPage, { generateMetadata } from './no-reset-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusKeywordPage />;
}
