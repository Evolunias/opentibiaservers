import Unline13EvoServerKeywordPage, { generateMetadata } from './unline-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13EvoServerKeywordPage />;
}
