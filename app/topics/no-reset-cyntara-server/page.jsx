import NoResetCyntaraServerKeywordPage, { generateMetadata } from './no-reset-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraServerKeywordPage />;
}
