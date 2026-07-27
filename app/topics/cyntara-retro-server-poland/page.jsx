import CyntaraRetroServerPolandKeywordPage, { generateMetadata } from './cyntara-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRetroServerPolandKeywordPage />;
}
