import ActiveEvoleraRegisterKeywordPage, { generateMetadata } from './active-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraRegisterKeywordPage />;
}
