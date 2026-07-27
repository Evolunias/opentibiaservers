import PvpYurotsServerKeywordPage, { generateMetadata } from './pvp-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpYurotsServerKeywordPage />;
}
