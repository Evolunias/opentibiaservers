import DuraOnline13EvoServerKeywordPage, { generateMetadata } from './dura-online-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13EvoServerKeywordPage />;
}
