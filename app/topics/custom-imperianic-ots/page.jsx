import CustomImperianicOtsKeywordPage, { generateMetadata } from './custom-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicOtsKeywordPage />;
}
