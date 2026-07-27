import LowrateCyntaraRegisterKeywordPage, { generateMetadata } from './lowrate-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraRegisterKeywordPage />;
}
