import CustomEternalOdysseyTibiaKeywordPage, { generateMetadata } from './custom-eternal-odyssey-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyTibiaKeywordPage />;
}
