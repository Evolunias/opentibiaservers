import TopCanobOpenTibiaKeywordPage, { generateMetadata } from './top-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobOpenTibiaKeywordPage />;
}
