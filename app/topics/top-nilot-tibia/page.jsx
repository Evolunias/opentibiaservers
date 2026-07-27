import TopNilotTibiaKeywordPage, { generateMetadata } from './top-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotTibiaKeywordPage />;
}
