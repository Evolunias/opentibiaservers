import Unline15EvoServerKeywordPage, { generateMetadata } from './unline-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15EvoServerKeywordPage />;
}
