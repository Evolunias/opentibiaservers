import HighrateEvoleraRegisterKeywordPage, { generateMetadata } from './highrate-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraRegisterKeywordPage />;
}
