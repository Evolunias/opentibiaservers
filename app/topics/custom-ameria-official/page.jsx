import CustomAmeriaOfficialKeywordPage, { generateMetadata } from './custom-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaOfficialKeywordPage />;
}
