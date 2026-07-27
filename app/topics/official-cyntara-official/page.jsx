import OfficialCyntaraOfficialKeywordPage, { generateMetadata } from './official-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraOfficialKeywordPage />;
}
