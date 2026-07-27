import NoResetGuideCanadaKeywordPage, { generateMetadata } from './no-reset-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideCanadaKeywordPage />;
}
