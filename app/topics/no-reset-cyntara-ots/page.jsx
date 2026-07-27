import NoResetCyntaraOtsKeywordPage, { generateMetadata } from './no-reset-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraOtsKeywordPage />;
}
