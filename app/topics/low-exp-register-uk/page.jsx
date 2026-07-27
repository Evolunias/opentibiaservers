import LowExpRegisterUkKeywordPage, { generateMetadata } from './low-exp-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterUkKeywordPage />;
}
