import TopZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './top-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineTibiaKeywordPage />;
}
