import CustomCyntaraOfficialKeywordPage, { generateMetadata } from './custom-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraOfficialKeywordPage />;
}
