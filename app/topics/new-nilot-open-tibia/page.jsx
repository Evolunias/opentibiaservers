import NewNilotOpenTibiaKeywordPage, { generateMetadata } from './new-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotOpenTibiaKeywordPage />;
}
