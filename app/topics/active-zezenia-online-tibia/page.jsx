import ActiveZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './active-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZezeniaOnlineTibiaKeywordPage />;
}
