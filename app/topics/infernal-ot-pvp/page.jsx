import InfernalOtPvpKeywordPage, { generateMetadata } from './infernal-ot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtPvpKeywordPage />;
}
