import NonPvpClientCanadaKeywordPage, { generateMetadata } from './non-pvp-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientCanadaKeywordPage />;
}
