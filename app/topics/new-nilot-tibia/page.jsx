import NewNilotTibiaKeywordPage, { generateMetadata } from './new-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotTibiaKeywordPage />;
}
