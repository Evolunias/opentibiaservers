import NonPvpBlazeraServerKeywordPage, { generateMetadata } from './non-pvp-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpBlazeraServerKeywordPage />;
}
