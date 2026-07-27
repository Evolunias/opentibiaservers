import LowrateSerenityOtsKeywordPage, { generateMetadata } from './lowrate-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityOtsKeywordPage />;
}
