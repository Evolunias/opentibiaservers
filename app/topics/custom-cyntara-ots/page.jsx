import CustomCyntaraOtsKeywordPage, { generateMetadata } from './custom-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraOtsKeywordPage />;
}
