import PvpOtServerUkKeywordPage, { generateMetadata } from './pvp-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOtServerUkKeywordPage />;
}
