import CustomRubinotOpenTibiaKeywordPage, { generateMetadata } from './custom-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotOpenTibiaKeywordPage />;
}
