import EvoServerClientKeywordPage, { generateMetadata } from './evo-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerClientKeywordPage />;
}
