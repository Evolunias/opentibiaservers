import Alastera12EvoServerKeywordPage, { generateMetadata } from './alastera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12EvoServerKeywordPage />;
}
