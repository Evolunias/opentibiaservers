import CustomMapLaunchMexicoKeywordPage, { generateMetadata } from './custom-map-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchMexicoKeywordPage />;
}
