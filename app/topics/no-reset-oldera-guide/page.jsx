import NoResetOlderaGuideKeywordPage, { generateMetadata } from './no-reset-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaGuideKeywordPage />;
}
