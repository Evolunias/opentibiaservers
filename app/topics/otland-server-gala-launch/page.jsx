import OtlandServerGalaLaunchKeywordPage, { generateMetadata } from './otland-server-gala-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaLaunchKeywordPage />;
}
