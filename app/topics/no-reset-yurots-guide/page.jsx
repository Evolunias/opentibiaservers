import NoResetYurotsGuideKeywordPage, { generateMetadata } from './no-reset-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsGuideKeywordPage />;
}
