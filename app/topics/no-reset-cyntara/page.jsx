import NoResetCyntaraKeywordPage, { generateMetadata } from './no-reset-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraKeywordPage />;
}
