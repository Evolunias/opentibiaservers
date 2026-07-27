import NonPvpOtServerListKeywordPage, { generateMetadata } from './non-pvp-ot-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerListKeywordPage />;
}
