import LowrateAureraGlobalGuideKeywordPage, { generateMetadata } from './lowrate-aurera-global-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalGuideKeywordPage />;
}
