import NoResetGuideBrazilKeywordPage, { generateMetadata } from './no-reset-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideBrazilKeywordPage />;
}
