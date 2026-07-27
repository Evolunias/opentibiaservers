import NonPvpServersUsaKeywordPage, { generateMetadata } from './non-pvp-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersUsaKeywordPage />;
}
