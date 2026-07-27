import NewCanobTibiaKeywordPage, { generateMetadata } from './new-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobTibiaKeywordPage />;
}
