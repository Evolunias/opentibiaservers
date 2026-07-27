import HighExpRegisterUkKeywordPage, { generateMetadata } from './high-exp-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRegisterUkKeywordPage />;
}
