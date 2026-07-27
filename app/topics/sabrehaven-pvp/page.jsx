import SabrehavenPvpKeywordPage, { generateMetadata } from './sabrehaven-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpKeywordPage />;
}
