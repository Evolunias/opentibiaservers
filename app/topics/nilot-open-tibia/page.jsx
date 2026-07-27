import NilotOpenTibiaKeywordPage, { generateMetadata } from './nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotOpenTibiaKeywordPage />;
}
