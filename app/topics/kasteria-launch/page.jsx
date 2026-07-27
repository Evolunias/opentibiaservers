import KasteriaLaunchKeywordPage, { generateMetadata } from './kasteria-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaLaunchKeywordPage />;
}
