import OfficialEvoluniaClientKeywordPage, { generateMetadata } from './official-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaClientKeywordPage />;
}
