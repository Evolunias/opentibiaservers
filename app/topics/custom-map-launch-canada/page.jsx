import CustomMapLaunchCanadaKeywordPage, { generateMetadata } from './custom-map-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchCanadaKeywordPage />;
}
