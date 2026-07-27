import DuraOnline11EvoServerKeywordPage, { generateMetadata } from './dura-online-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11EvoServerKeywordPage />;
}
