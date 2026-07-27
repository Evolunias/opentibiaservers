import OxygenotGuideKeywordPage, { generateMetadata } from './oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotGuideKeywordPage />;
}
