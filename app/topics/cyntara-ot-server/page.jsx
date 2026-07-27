import CyntaraOtServerKeywordPage, { generateMetadata } from './cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraOtServerKeywordPage />;
}
