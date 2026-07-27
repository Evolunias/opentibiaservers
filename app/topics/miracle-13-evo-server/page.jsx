import Miracle13EvoServerKeywordPage, { generateMetadata } from './miracle-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13EvoServerKeywordPage />;
}
