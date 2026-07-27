import CustomZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './custom-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineTibiaKeywordPage />;
}
