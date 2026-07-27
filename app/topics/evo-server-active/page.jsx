import EvoServerActiveKeywordPage, { generateMetadata } from './evo-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerActiveKeywordPage />;
}
