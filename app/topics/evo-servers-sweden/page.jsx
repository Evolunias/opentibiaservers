import EvoServersSwedenKeywordPage, { generateMetadata } from './evo-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersSwedenKeywordPage />;
}
