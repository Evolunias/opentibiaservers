import Alastera13EvoServerKeywordPage, { generateMetadata } from './alastera-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13EvoServerKeywordPage />;
}
