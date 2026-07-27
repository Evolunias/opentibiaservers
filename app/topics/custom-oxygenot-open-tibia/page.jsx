import CustomOxygenotOpenTibiaKeywordPage, { generateMetadata } from './custom-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotOpenTibiaKeywordPage />;
}
