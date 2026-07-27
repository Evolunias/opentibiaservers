import CustomBlazeraOtsKeywordPage, { generateMetadata } from './custom-blazera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraOtsKeywordPage />;
}
