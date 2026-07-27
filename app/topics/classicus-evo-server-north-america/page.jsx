import ClassicusEvoServerNorthAmericaKeywordPage, { generateMetadata } from './classicus-evo-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusEvoServerNorthAmericaKeywordPage />;
}
