import ActiveNilotOpenTibiaKeywordPage, { generateMetadata } from './active-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotOpenTibiaKeywordPage />;
}
