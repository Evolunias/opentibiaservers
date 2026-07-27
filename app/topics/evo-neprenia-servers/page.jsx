import EvoNepreniaServersKeywordPage, { generateMetadata } from './evo-neprenia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNepreniaServersKeywordPage />;
}
