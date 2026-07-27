import TopCyntaraOfficialKeywordPage, { generateMetadata } from './top-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraOfficialKeywordPage />;
}
