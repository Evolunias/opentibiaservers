import CustomMapLaunchUsaKeywordPage, { generateMetadata } from './custom-map-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchUsaKeywordPage />;
}
