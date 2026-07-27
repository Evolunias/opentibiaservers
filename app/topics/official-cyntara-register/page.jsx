import OfficialCyntaraRegisterKeywordPage, { generateMetadata } from './official-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraRegisterKeywordPage />;
}
