import PopularNilotOpenTibiaKeywordPage, { generateMetadata } from './popular-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotOpenTibiaKeywordPage />;
}
