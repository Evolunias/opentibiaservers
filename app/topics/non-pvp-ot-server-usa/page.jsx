import NonPvpOtServerUsaKeywordPage, { generateMetadata } from './non-pvp-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerUsaKeywordPage />;
}
