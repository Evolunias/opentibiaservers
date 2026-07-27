import NoResetAmeriaGuideKeywordPage, { generateMetadata } from './no-reset-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaGuideKeywordPage />;
}
