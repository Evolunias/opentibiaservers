import OfficialEvoluniaServerKeywordPage, { generateMetadata } from './official-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaServerKeywordPage />;
}
