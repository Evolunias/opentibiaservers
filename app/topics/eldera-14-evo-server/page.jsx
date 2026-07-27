import Eldera14EvoServerKeywordPage, { generateMetadata } from './eldera-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14EvoServerKeywordPage />;
}
