import LowExpRegisterPolandKeywordPage, { generateMetadata } from './low-exp-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterPolandKeywordPage />;
}
