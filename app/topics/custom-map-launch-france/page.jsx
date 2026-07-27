import CustomMapLaunchFranceKeywordPage, { generateMetadata } from './custom-map-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchFranceKeywordPage />;
}
