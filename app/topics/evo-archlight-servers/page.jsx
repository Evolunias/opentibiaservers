import EvoArchlightServersKeywordPage, { generateMetadata } from './evo-archlight-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoArchlightServersKeywordPage />;
}
