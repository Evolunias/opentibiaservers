import CustomMidhemOfficialKeywordPage, { generateMetadata } from './custom-midhem-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemOfficialKeywordPage />;
}
