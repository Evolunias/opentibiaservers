import PvpEvoleraServerKeywordPage, { generateMetadata } from './pvp-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEvoleraServerKeywordPage />;
}
