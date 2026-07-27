import EvoSaintsotServersKeywordPage, { generateMetadata } from './evo-saintsot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSaintsotServersKeywordPage />;
}
