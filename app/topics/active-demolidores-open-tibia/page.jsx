import ActiveDemolidoresOpenTibiaKeywordPage, { generateMetadata } from './active-demolidores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresOpenTibiaKeywordPage />;
}
