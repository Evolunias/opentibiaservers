import PvpCarlinotServerKeywordPage, { generateMetadata } from './pvp-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpCarlinotServerKeywordPage />;
}
