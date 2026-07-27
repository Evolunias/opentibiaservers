import LowrateClassicusOtsKeywordPage, { generateMetadata } from './lowrate-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusOtsKeywordPage />;
}
