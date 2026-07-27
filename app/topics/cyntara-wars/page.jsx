import CyntaraWarsKeywordPage, { generateMetadata } from './cyntara-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraWarsKeywordPage />;
}
