import CustomYurotsOtsKeywordPage, { generateMetadata } from './custom-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsOtsKeywordPage />;
}
