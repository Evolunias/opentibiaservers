import OtmadnessBossesKeywordPage, { generateMetadata } from './otmadness-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessBossesKeywordPage />;
}
