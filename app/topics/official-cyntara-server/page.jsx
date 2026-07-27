import OfficialCyntaraServerKeywordPage, { generateMetadata } from './official-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraServerKeywordPage />;
}
