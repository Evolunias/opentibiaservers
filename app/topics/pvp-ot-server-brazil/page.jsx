import PvpOtServerBrazilKeywordPage, { generateMetadata } from './pvp-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOtServerBrazilKeywordPage />;
}
