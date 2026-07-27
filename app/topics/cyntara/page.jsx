import CyntaraKeywordPage, { generateMetadata } from './cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraKeywordPage />;
}
