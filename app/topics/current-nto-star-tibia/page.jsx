import CurrentNtoStarTibiaKeywordPage, { generateMetadata } from './current-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarTibiaKeywordPage />;
}
