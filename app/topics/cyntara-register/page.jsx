import CyntaraRegisterKeywordPage, { generateMetadata } from './cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRegisterKeywordPage />;
}
