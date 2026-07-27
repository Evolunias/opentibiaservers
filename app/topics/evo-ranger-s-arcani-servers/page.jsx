import EvoRangerSArcaniServersKeywordPage, { generateMetadata } from './evo-ranger-s-arcani-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRangerSArcaniServersKeywordPage />;
}
