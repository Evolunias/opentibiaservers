import RetroCyntaraServerKeywordPage, { generateMetadata } from './retro-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroCyntaraServerKeywordPage />;
}
