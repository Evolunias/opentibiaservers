import CustomTibiaretroOtsKeywordPage, { generateMetadata } from './custom-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroOtsKeywordPage />;
}
