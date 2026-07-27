import LowrateClassicusKeywordPage, { generateMetadata } from './lowrate-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusKeywordPage />;
}
