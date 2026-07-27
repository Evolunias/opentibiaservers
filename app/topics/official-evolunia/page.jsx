import OfficialEvoluniaKeywordPage, { generateMetadata } from './official-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaKeywordPage />;
}
