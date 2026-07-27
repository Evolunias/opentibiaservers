import Unline14EvoServerKeywordPage, { generateMetadata } from './unline-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline14EvoServerKeywordPage />;
}
