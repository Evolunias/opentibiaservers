import ActiveTibijkaOpenTibiaKeywordPage, { generateMetadata } from './active-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaOpenTibiaKeywordPage />;
}
