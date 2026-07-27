import Alastera14EvoServerKeywordPage, { generateMetadata } from './alastera-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14EvoServerKeywordPage />;
}
