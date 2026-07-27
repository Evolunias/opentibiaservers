import NonPvpServersCanadaKeywordPage, { generateMetadata } from './non-pvp-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersCanadaKeywordPage />;
}
