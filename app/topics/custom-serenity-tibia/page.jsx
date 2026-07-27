import CustomSerenityTibiaKeywordPage, { generateMetadata } from './custom-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityTibiaKeywordPage />;
}
