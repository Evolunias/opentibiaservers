import MiracleLaunchKeywordPage, { generateMetadata } from './miracle-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleLaunchKeywordPage />;
}
