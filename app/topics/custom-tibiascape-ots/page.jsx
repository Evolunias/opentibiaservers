import CustomTibiascapeOtsKeywordPage, { generateMetadata } from './custom-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeOtsKeywordPage />;
}
