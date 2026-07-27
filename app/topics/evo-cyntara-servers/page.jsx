import EvoCyntaraServersKeywordPage, { generateMetadata } from './evo-cyntara-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCyntaraServersKeywordPage />;
}
