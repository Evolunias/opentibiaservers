import OtmadnessPvpKeywordPage, { generateMetadata } from './otmadness-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessPvpKeywordPage />;
}
