import CustomCyntaraOtKeywordPage, { generateMetadata } from './custom-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraOtKeywordPage />;
}
