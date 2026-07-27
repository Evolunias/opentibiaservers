import EvoServerHighExpKeywordPage, { generateMetadata } from './evo-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerHighExpKeywordPage />;
}
