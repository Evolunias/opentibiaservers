import NoResetGuideSwedenKeywordPage, { generateMetadata } from './no-reset-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideSwedenKeywordPage />;
}
