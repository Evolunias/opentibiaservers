import PvpOtServerMexicoKeywordPage, { generateMetadata } from './pvp-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOtServerMexicoKeywordPage />;
}
