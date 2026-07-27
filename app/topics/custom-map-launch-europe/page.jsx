import CustomMapLaunchEuropeKeywordPage, { generateMetadata } from './custom-map-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchEuropeKeywordPage />;
}
