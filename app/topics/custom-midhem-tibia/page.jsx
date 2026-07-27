import CustomMidhemTibiaKeywordPage, { generateMetadata } from './custom-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemTibiaKeywordPage />;
}
