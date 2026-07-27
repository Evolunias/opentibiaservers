import NoResetCyntaraGuideKeywordPage, { generateMetadata } from './no-reset-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraGuideKeywordPage />;
}
