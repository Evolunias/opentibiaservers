import TopEvoluniaOfficialKeywordPage, { generateMetadata } from './top-evolunia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaOfficialKeywordPage />;
}
