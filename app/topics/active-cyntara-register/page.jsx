import ActiveCyntaraRegisterKeywordPage, { generateMetadata } from './active-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraRegisterKeywordPage />;
}
