import EvoClassickDrakoriaServerKeywordPage, { generateMetadata } from './evo-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClassickDrakoriaServerKeywordPage />;
}
