import CustomTibiaretroOtKeywordPage, { generateMetadata } from './custom-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroOtKeywordPage />;
}
