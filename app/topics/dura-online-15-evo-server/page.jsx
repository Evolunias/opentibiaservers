import DuraOnline15EvoServerKeywordPage, { generateMetadata } from './dura-online-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15EvoServerKeywordPage />;
}
