import CurrentBaiakIlusionTibiaKeywordPage, { generateMetadata } from './current-baiak-ilusion-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionTibiaKeywordPage />;
}
