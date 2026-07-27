import TopOxygenotTibiaKeywordPage, { generateMetadata } from './top-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotTibiaKeywordPage />;
}
