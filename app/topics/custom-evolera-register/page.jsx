import CustomEvoleraRegisterKeywordPage, { generateMetadata } from './custom-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraRegisterKeywordPage />;
}
