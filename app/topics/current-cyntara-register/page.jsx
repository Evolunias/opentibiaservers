import CurrentCyntaraRegisterKeywordPage, { generateMetadata } from './current-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraRegisterKeywordPage />;
}
