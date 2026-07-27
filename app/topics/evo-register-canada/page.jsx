import EvoRegisterCanadaKeywordPage, { generateMetadata } from './evo-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterCanadaKeywordPage />;
}
