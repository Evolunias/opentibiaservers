import Alastera11EvoServerKeywordPage, { generateMetadata } from './alastera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11EvoServerKeywordPage />;
}
