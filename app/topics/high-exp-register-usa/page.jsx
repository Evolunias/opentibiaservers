import HighExpRegisterUsaKeywordPage, { generateMetadata } from './high-exp-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRegisterUsaKeywordPage />;
}
