import NonPvpOtmadnessServerKeywordPage, { generateMetadata } from './non-pvp-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtmadnessServerKeywordPage />;
}
