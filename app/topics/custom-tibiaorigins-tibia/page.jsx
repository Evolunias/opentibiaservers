import CustomTibiaoriginsTibiaKeywordPage, { generateMetadata } from './custom-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsTibiaKeywordPage />;
}
