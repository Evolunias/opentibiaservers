import OfficialEvoluniaRegisterKeywordPage, { generateMetadata } from './official-evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaRegisterKeywordPage />;
}
