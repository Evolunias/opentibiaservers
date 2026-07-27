import BaiakLaunchBrazilKeywordPage, { generateMetadata } from './baiak-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchBrazilKeywordPage />;
}
