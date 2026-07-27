import CustomOxygenotTibiaKeywordPage, { generateMetadata } from './custom-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotTibiaKeywordPage />;
}
