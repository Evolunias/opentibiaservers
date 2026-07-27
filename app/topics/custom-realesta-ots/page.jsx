import CustomRealestaOtsKeywordPage, { generateMetadata } from './custom-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaOtsKeywordPage />;
}
