import PvpTibianusServerKeywordPage, { generateMetadata } from './pvp-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibianusServerKeywordPage />;
}
