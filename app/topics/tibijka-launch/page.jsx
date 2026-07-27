import TibijkaLaunchKeywordPage, { generateMetadata } from './tibijka-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaLaunchKeywordPage />;
}
