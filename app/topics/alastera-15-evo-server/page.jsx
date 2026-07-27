import Alastera15EvoServerKeywordPage, { generateMetadata } from './alastera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15EvoServerKeywordPage />;
}
