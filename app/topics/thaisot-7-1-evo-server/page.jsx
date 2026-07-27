import Thaisot71EvoServerKeywordPage, { generateMetadata } from './thaisot-7-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71EvoServerKeywordPage />;
}
