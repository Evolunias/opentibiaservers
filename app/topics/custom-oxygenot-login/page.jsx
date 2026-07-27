import CustomOxygenotLoginKeywordPage, { generateMetadata } from './custom-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotLoginKeywordPage />;
}
