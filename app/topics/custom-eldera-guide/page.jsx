import CustomElderaGuideKeywordPage, { generateMetadata } from './custom-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaGuideKeywordPage />;
}
