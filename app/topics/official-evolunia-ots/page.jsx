import OfficialEvoluniaOtsKeywordPage, { generateMetadata } from './official-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaOtsKeywordPage />;
}
