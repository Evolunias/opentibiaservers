import CustomTibiaretroTibiaKeywordPage, { generateMetadata } from './custom-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroTibiaKeywordPage />;
}
