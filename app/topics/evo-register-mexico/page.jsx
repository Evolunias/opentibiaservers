import EvoRegisterMexicoKeywordPage, { generateMetadata } from './evo-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterMexicoKeywordPage />;
}
