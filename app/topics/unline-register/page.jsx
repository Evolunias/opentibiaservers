import UnlineRegisterKeywordPage, { generateMetadata } from './unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRegisterKeywordPage />;
}
