import NoxiousotPvpKeywordPage, { generateMetadata } from './noxiousot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotPvpKeywordPage />;
}
