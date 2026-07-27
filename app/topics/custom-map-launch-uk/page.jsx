import CustomMapLaunchUkKeywordPage, { generateMetadata } from './custom-map-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchUkKeywordPage />;
}
