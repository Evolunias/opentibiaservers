import Eldera12EvoServerKeywordPage, { generateMetadata } from './eldera-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12EvoServerKeywordPage />;
}
