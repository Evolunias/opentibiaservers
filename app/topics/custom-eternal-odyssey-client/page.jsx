import CustomEternalOdysseyClientKeywordPage, { generateMetadata } from './custom-eternal-odyssey-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyClientKeywordPage />;
}
