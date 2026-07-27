import CyntaraLaunchKeywordPage, { generateMetadata } from './cyntara-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraLaunchKeywordPage />;
}
