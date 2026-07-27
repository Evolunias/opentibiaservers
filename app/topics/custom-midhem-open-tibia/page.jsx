import CustomMidhemOpenTibiaKeywordPage, { generateMetadata } from './custom-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemOpenTibiaKeywordPage />;
}
