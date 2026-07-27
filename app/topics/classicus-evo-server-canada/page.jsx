import ClassicusEvoServerCanadaKeywordPage, { generateMetadata } from './classicus-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusEvoServerCanadaKeywordPage />;
}
