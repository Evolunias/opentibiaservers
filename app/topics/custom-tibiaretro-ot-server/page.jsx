import CustomTibiaretroOtServerKeywordPage, { generateMetadata } from './custom-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroOtServerKeywordPage />;
}
