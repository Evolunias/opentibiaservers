import CustomCyntaraRegisterKeywordPage, { generateMetadata } from './custom-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraRegisterKeywordPage />;
}
