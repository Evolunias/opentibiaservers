import CustomCyntaraKeywordPage, { generateMetadata } from './custom-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraKeywordPage />;
}
