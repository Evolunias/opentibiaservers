import HighExpCyntaraServerKeywordPage, { generateMetadata } from './high-exp-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpCyntaraServerKeywordPage />;
}
