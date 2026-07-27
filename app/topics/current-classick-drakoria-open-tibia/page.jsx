import CurrentClassickDrakoriaOpenTibiaKeywordPage, { generateMetadata } from './current-classick-drakoria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaOpenTibiaKeywordPage />;
}
