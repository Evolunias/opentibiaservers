import NonPvpServerListCanadaKeywordPage, { generateMetadata } from './non-pvp-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListCanadaKeywordPage />;
}
