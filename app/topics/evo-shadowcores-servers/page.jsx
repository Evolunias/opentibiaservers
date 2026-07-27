import EvoShadowcoresServersKeywordPage, { generateMetadata } from './evo-shadowcores-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoShadowcoresServersKeywordPage />;
}
