import ActiveImperianicOpenTibiaKeywordPage, { generateMetadata } from './active-imperianic-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicOpenTibiaKeywordPage />;
}
