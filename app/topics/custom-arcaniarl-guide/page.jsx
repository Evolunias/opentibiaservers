import CustomArcaniarlGuideKeywordPage, { generateMetadata } from './custom-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlGuideKeywordPage />;
}
