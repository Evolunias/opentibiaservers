import TopCanobTibiaKeywordPage, { generateMetadata } from './top-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobTibiaKeywordPage />;
}
