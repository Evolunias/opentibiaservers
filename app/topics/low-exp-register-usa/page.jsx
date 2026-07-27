import LowExpRegisterUsaKeywordPage, { generateMetadata } from './low-exp-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterUsaKeywordPage />;
}
