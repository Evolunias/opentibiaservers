import TibiaoriginsLaunchKeywordPage, { generateMetadata } from './tibiaorigins-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsLaunchKeywordPage />;
}
