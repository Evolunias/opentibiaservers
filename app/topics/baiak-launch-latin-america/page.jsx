import BaiakLaunchLatinAmericaKeywordPage, { generateMetadata } from './baiak-launch-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchLatinAmericaKeywordPage />;
}
