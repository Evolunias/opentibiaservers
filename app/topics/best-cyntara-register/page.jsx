import BestCyntaraRegisterKeywordPage, { generateMetadata } from './best-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraRegisterKeywordPage />;
}
