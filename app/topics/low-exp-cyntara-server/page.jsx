import LowExpCyntaraServerKeywordPage, { generateMetadata } from './low-exp-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpCyntaraServerKeywordPage />;
}
