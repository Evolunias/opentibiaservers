import ImperianicPvpKeywordPage, { generateMetadata } from './imperianic-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicPvpKeywordPage />;
}
