import NewCyntaraRegisterKeywordPage, { generateMetadata } from './new-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraRegisterKeywordPage />;
}
