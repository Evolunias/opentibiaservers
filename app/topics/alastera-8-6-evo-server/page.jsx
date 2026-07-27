import Alastera86EvoServerKeywordPage, { generateMetadata } from './alastera-8-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86EvoServerKeywordPage />;
}
