import CustomOxygenotClientKeywordPage, { generateMetadata } from './custom-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotClientKeywordPage />;
}
