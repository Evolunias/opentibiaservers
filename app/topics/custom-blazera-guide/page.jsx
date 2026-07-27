import CustomBlazeraGuideKeywordPage, { generateMetadata } from './custom-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraGuideKeywordPage />;
}
