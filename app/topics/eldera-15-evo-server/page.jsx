import Eldera15EvoServerKeywordPage, { generateMetadata } from './eldera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15EvoServerKeywordPage />;
}
