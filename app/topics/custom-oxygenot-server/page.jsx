import CustomOxygenotServerKeywordPage, { generateMetadata } from './custom-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotServerKeywordPage />;
}
