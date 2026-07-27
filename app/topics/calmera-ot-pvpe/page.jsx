import CalmeraOtPvpeKeywordPage, { generateMetadata } from './calmera-ot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtPvpeKeywordPage />;
}
