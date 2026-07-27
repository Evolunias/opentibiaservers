import EvoCyntaraServerKeywordPage, { generateMetadata } from './evo-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCyntaraServerKeywordPage />;
}
