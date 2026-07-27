import NonPvpCalmeraOtServerKeywordPage, { generateMetadata } from './non-pvp-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpCalmeraOtServerKeywordPage />;
}
