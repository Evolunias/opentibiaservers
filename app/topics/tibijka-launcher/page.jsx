import TibijkaLauncherKeywordPage, { generateMetadata } from './tibijka-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaLauncherKeywordPage />;
}
