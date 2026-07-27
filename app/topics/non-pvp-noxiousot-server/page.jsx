import NonPvpNoxiousotServerKeywordPage, { generateMetadata } from './non-pvp-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpNoxiousotServerKeywordPage />;
}
