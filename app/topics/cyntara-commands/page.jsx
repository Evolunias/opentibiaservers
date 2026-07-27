import CyntaraCommandsKeywordPage, { generateMetadata } from './cyntara-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCommandsKeywordPage />;
}
