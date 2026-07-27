import OtlandLaunchKeywordPage, { generateMetadata } from './otland-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandLaunchKeywordPage />;
}
