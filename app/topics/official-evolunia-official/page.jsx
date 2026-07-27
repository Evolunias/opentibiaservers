import OfficialEvoluniaOfficialKeywordPage, { generateMetadata } from './official-evolunia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaOfficialKeywordPage />;
}
