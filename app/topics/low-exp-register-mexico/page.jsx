import LowExpRegisterMexicoKeywordPage, { generateMetadata } from './low-exp-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRegisterMexicoKeywordPage />;
}
