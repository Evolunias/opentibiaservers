import PopularNilotTibiaKeywordPage, { generateMetadata } from './popular-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotTibiaKeywordPage />;
}
