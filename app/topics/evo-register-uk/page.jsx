import EvoRegisterUkKeywordPage, { generateMetadata } from './evo-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterUkKeywordPage />;
}
