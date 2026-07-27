import EvoluniaRegisterKeywordPage, { generateMetadata } from './evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRegisterKeywordPage />;
}
