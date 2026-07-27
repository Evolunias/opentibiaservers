import CurrentEvoleraRegisterKeywordPage, { generateMetadata } from './current-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraRegisterKeywordPage />;
}
