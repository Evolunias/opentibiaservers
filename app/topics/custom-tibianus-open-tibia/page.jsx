import CustomTibianusOpenTibiaKeywordPage, { generateMetadata } from './custom-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusOpenTibiaKeywordPage />;
}
