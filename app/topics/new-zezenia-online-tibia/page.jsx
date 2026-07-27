import NewZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './new-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZezeniaOnlineTibiaKeywordPage />;
}
