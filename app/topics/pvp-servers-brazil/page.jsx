import PvpServersBrazilKeywordPage, { generateMetadata } from './pvp-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersBrazilKeywordPage />;
}
