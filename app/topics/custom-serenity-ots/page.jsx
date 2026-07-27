import CustomSerenityOtsKeywordPage, { generateMetadata } from './custom-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityOtsKeywordPage />;
}
