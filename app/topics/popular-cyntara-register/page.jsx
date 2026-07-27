import PopularCyntaraRegisterKeywordPage, { generateMetadata } from './popular-cyntara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraRegisterKeywordPage />;
}
