import Eldera13EvoServerKeywordPage, { generateMetadata } from './eldera-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13EvoServerKeywordPage />;
}
