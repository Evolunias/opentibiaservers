import CustomClassicusOtsKeywordPage, { generateMetadata } from './custom-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusOtsKeywordPage />;
}
