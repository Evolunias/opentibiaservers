import LowrateEvoluniaRegisterKeywordPage, { generateMetadata } from './lowrate-evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaRegisterKeywordPage />;
}
