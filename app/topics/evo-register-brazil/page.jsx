import EvoRegisterBrazilKeywordPage, { generateMetadata } from './evo-register-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterBrazilKeywordPage />;
}
