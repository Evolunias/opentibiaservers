import ActiveCanobTibiaKeywordPage, { generateMetadata } from './active-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobTibiaKeywordPage />;
}
