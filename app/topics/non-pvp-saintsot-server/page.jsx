import NonPvpSaintsotServerKeywordPage, { generateMetadata } from './non-pvp-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSaintsotServerKeywordPage />;
}
