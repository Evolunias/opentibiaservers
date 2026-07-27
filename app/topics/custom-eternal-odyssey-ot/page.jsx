import CustomEternalOdysseyOtKeywordPage, { generateMetadata } from './custom-eternal-odyssey-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyOtKeywordPage />;
}
