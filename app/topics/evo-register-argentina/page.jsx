import EvoRegisterArgentinaKeywordPage, { generateMetadata } from './evo-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterArgentinaKeywordPage />;
}
