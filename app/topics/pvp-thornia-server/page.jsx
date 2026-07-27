import PvpThorniaServerKeywordPage, { generateMetadata } from './pvp-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpThorniaServerKeywordPage />;
}
