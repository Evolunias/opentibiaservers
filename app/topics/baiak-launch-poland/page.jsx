import BaiakLaunchPolandKeywordPage, { generateMetadata } from './baiak-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchPolandKeywordPage />;
}
