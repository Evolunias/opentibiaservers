import ArcaniarlCanadaServersKeywordPage, { generateMetadata } from './arcaniarl-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlCanadaServersKeywordPage />;
}
