import LowrateNilotOpenTibiaKeywordPage, { generateMetadata } from './lowrate-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotOpenTibiaKeywordPage />;
}
