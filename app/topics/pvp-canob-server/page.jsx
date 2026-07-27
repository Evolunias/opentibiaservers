import PvpCanobServerKeywordPage, { generateMetadata } from './pvp-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpCanobServerKeywordPage />;
}
