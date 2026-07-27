import HighrateAmeriaRegisterKeywordPage, { generateMetadata } from './highrate-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaRegisterKeywordPage />;
}
