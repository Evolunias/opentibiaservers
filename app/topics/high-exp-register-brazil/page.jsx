import HighExpRegisterBrazilKeywordPage, { generateMetadata } from './high-exp-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRegisterBrazilKeywordPage />;
}
