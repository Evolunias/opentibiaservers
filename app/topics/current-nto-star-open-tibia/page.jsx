import CurrentNtoStarOpenTibiaKeywordPage, { generateMetadata } from './current-nto-star-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarOpenTibiaKeywordPage />;
}
