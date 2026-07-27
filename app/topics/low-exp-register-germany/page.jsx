import LowExpRegisterGermanyKeywordPage, { generateMetadata } from './low-exp-register-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterGermanyKeywordPage />;
}
