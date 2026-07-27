import EvoUnlineServersKeywordPage, { generateMetadata } from './evo-unline-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoUnlineServersKeywordPage />;
}
