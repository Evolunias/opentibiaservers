import LowrateEvoleraRegisterKeywordPage, { generateMetadata } from './lowrate-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraRegisterKeywordPage />;
}
