import NewCyntaraOfficialKeywordPage, { generateMetadata } from './new-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraOfficialKeywordPage />;
}
