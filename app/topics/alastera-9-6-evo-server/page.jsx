import Alastera96EvoServerKeywordPage, { generateMetadata } from './alastera-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96EvoServerKeywordPage />;
}
