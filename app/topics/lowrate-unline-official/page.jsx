import LowrateUnlineOfficialKeywordPage, { generateMetadata } from './lowrate-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineOfficialKeywordPage />;
}
