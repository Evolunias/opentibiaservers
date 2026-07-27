import Thaisot14EvoServerKeywordPage, { generateMetadata } from './thaisot-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14EvoServerKeywordPage />;
}
