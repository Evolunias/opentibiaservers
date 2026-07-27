import CustomOxygenotKeywordPage, { generateMetadata } from './custom-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotKeywordPage />;
}
