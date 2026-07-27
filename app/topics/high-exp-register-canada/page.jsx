import HighExpRegisterCanadaKeywordPage, { generateMetadata } from './high-exp-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRegisterCanadaKeywordPage />;
}
