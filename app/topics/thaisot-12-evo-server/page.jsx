import Thaisot12EvoServerKeywordPage, { generateMetadata } from './thaisot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12EvoServerKeywordPage />;
}
