import CustomMapLaunchBrazilKeywordPage, { generateMetadata } from './custom-map-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchBrazilKeywordPage />;
}
