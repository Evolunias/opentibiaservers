import BestEvoleraRegisterKeywordPage, { generateMetadata } from './best-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraRegisterKeywordPage />;
}
