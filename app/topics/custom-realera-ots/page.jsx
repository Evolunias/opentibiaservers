import CustomRealeraOtsKeywordPage, { generateMetadata } from './custom-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraOtsKeywordPage />;
}
