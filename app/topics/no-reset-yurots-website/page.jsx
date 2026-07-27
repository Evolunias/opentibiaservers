import NoResetYurotsWebsiteKeywordPage, { generateMetadata } from './no-reset-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsWebsiteKeywordPage />;
}
