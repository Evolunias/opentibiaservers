import LowExpRegisterArgentinaKeywordPage, { generateMetadata } from './low-exp-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterArgentinaKeywordPage />;
}
