import LowExpRegisterSwedenKeywordPage, { generateMetadata } from './low-exp-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterSwedenKeywordPage />;
}
