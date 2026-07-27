import OtlandNonPvpKeywordPage, { generateMetadata } from './otland-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandNonPvpKeywordPage />;
}
