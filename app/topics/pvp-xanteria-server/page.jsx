import PvpXanteriaServerKeywordPage, { generateMetadata } from './pvp-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpXanteriaServerKeywordPage />;
}
