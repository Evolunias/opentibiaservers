import OfficialCyntaraClientKeywordPage, { generateMetadata } from './official-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraClientKeywordPage />;
}
