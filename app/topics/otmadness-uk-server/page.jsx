import OtmadnessUkServerKeywordPage, { generateMetadata } from './otmadness-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessUkServerKeywordPage />;
}
