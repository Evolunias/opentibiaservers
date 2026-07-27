import ActiveImperianicTibiaKeywordPage, { generateMetadata } from './active-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicTibiaKeywordPage />;
}
