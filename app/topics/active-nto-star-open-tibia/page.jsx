import ActiveNtoStarOpenTibiaKeywordPage, { generateMetadata } from './active-nto-star-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarOpenTibiaKeywordPage />;
}
