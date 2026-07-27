import PvpeLaunchUkKeywordPage, { generateMetadata } from './pvpe-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchUkKeywordPage />;
}
