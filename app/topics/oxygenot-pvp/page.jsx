import OxygenotPvpKeywordPage, { generateMetadata } from './oxygenot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotPvpKeywordPage />;
}
