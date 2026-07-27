import CustomTibiaraOtsKeywordPage, { generateMetadata } from './custom-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraOtsKeywordPage />;
}
