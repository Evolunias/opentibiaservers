import OtlandPvpKeywordPage, { generateMetadata } from './otland-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandPvpKeywordPage />;
}
