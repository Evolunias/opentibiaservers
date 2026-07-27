import BaiakLaunchMexicoKeywordPage, { generateMetadata } from './baiak-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchMexicoKeywordPage />;
}
