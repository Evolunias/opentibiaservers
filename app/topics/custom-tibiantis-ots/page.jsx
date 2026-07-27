import CustomTibiantisOtsKeywordPage, { generateMetadata } from './custom-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisOtsKeywordPage />;
}
