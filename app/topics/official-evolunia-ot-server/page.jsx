import OfficialEvoluniaOtServerKeywordPage, { generateMetadata } from './official-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaOtServerKeywordPage />;
}
