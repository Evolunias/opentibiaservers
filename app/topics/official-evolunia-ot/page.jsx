import OfficialEvoluniaOtKeywordPage, { generateMetadata } from './official-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaOtKeywordPage />;
}
