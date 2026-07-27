import ActiveEvoluniaRegisterKeywordPage, { generateMetadata } from './active-evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaRegisterKeywordPage />;
}
