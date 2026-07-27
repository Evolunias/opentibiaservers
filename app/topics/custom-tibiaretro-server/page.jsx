import CustomTibiaretroServerKeywordPage, { generateMetadata } from './custom-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroServerKeywordPage />;
}
