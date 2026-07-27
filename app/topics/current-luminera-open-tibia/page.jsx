import CurrentLumineraOpenTibiaKeywordPage, { generateMetadata } from './current-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraOpenTibiaKeywordPage />;
}
