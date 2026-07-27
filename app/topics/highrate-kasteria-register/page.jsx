import HighrateKasteriaRegisterKeywordPage, { generateMetadata } from './highrate-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaRegisterKeywordPage />;
}
