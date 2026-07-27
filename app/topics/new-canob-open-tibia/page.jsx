import NewCanobOpenTibiaKeywordPage, { generateMetadata } from './new-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobOpenTibiaKeywordPage />;
}
