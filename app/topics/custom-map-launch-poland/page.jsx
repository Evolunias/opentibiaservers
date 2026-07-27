import CustomMapLaunchPolandKeywordPage, { generateMetadata } from './custom-map-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchPolandKeywordPage />;
}
