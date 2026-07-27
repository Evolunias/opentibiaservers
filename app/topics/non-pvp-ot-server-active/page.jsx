import NonPvpOtServerActiveKeywordPage, { generateMetadata } from './non-pvp-ot-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerActiveKeywordPage />;
}
