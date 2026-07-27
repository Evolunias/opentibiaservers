import PvpTibiantisServerKeywordPage, { generateMetadata } from './pvp-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiantisServerKeywordPage />;
}
