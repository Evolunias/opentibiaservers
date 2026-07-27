import HighrateCyntaraRegisterKeywordPage, { generateMetadata } from './highrate-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraRegisterKeywordPage />;
}
