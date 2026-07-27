import CyntaraLauncherKeywordPage, { generateMetadata } from './cyntara-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraLauncherKeywordPage />;
}
