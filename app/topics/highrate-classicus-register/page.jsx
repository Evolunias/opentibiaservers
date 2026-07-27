import HighrateClassicusRegisterKeywordPage, { generateMetadata } from './highrate-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusRegisterKeywordPage />;
}
