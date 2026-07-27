import CurrentZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './current-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineTibiaKeywordPage />;
}
