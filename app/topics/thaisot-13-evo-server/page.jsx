import Thaisot13EvoServerKeywordPage, { generateMetadata } from './thaisot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13EvoServerKeywordPage />;
}
