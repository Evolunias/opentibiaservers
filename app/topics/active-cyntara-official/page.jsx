import ActiveCyntaraOfficialKeywordPage, { generateMetadata } from './active-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraOfficialKeywordPage />;
}
