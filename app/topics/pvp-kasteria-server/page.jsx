import PvpKasteriaServerKeywordPage, { generateMetadata } from './pvp-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpKasteriaServerKeywordPage />;
}
